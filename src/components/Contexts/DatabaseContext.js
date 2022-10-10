import { child, get, getDatabase, ref, set } from "firebase/database";
import { createContext, useContext } from "react";

export const DatabaseContext = createContext();

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) throw new Error("No hay un database provider");
  return context;
};

export const DatabaseProvider = ({ children }) => {
  const db = getDatabase();

  const insertData = async (uid, offerID, offerData) => {
    await set(ref(db, "offers/" + uid + "/" + offerID), {
      photoLink: offerData.photoLink,
      title: offerData.title,
      description: offerData.description,
      preferredItem: offerData.preferredItem,
      email: offerData.email,
    });
  };

  const selectData = async () => {
    const dbRef = ref(db);

    await get(child(dbRef, "offers/")).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot);
      } else {
        console.log("No data");
      }
    });
  };

  return (
    <DatabaseContext.Provider value={{ insertData, selectData }}>
      {children}
    </DatabaseContext.Provider>
  );
};
