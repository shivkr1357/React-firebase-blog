import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import Services from "./Services";
import InterviewLinks from "./InterviewLinks";

const LandingPage = () => {
  const [visitor, setVisitor] = useState(0);
  const visitorCollectionRef = collection(db, "visitor_counter");

  const addVisitor = async () => {
    await addDoc(visitorCollectionRef, {
      visitorCount: visitor + 1,
      created: serverTimestamp(),
    });
  };

  useEffect(() => {
    const getVisitor = async () => {
      const data = await getDocs(visitorCollectionRef);
      if (data.docs.length === 1) {
        data.docs.map((doc) => {
          setVisitor(doc.data().visitorCount);
          updateVisitor(doc.id, doc.data().visitorCount);
        });
      } else {
        addVisitor();
      }
    };
    getVisitor();
  }, []);

  const updateVisitor = async (visitor_id, visitorCount) => {
    const visitorDoc = doc(db, "visitor_counter", visitor_id);

    await updateDoc(visitorDoc, { visitorCount: visitorCount + 1 });
  };

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          fontWeight: "500",
          fontFamily: "Roboto",
        }}>
        You are visitor number {visitor}
      </Typography>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to right, #9900ff, #cc80ff)`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 2, sm: 3, md: 5 },
          }}>
          <InterviewLinks />
          <Services />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
