import { child, get, getDatabase, ref, remove, set } from "firebase/database";
import { createContext, useContext } from "react";

export const DatabaseContext = createContext();

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) throw new Error("No hay un database provider");
  return context;
};

export const DatabaseProvider = ({ children }) => {
  const db = getDatabase();

  const insertData = async (category, offerID, offerData) => {
    await set(ref(db, category + "/" + offerID), {
      id: offerID,
      category: category,
      photoLink: offerData.photoLink,
      title: offerData.title,
      description: offerData.description,
      preferredItem: offerData.preferredItem,
      contact: offerData.contact,
      userId: offerData.userId,
    });
  };

  const selectData = async (category) => {
    const dbRef = ref(db);
    let values = null;

    await get(child(dbRef, category + "/")).then((snapshot) => {
      if (snapshot.exists()) {
        values = Object.values(snapshot.val());
      }
    });

    return values;
  };

  const removeData = async (category, offerID) => {
    remove(ref(db, category + "/" + offerID));
  };

  return (
    <DatabaseContext.Provider value={{ insertData, selectData, removeData }}>
      {children}
    </DatabaseContext.Provider>
  );
};
