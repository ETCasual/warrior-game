import { type AppType } from "next/app";

import "@/styles/globals.css";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "@/lib/firebase";
import { Firestore } from "@/components/Init";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Firestore>
        <Component {...pageProps} />
      </Firestore>
    </FirebaseAppProvider>
  );
};

export default MyApp;
