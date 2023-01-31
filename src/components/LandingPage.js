import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";

const LandingPage = () => {
  const navigate = useNavigate();
  const [visitor, setVisitor] = useState(0);
  const visitorCollectionRef = collection(db, "visitor_counter");

  const addVisitor = async () => {
    console.log("here in add");
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
  }, [visitorCollectionRef]);

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
          height: 600,
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
          <Box
            sx={{
              background: "white",
              opacity: 0.9,
              borderRadius: "10px",
              marginTop: "30px",
            }}>
            <Typography
              align="center"
              variant="h1"
              p={2}
              pt={8}
              sx={{ fontSize: "20px", fontFamily: "Roboto", cursor: "pointer" }}
              onClick={() => navigate("/interview-qa/js-interview-questions")}>
              Top INTERVIEW QUESTIONS of the JAVASCRIPT
            </Typography>
            <Typography
              align="center"
              variant="h2"
              sx={{ fontSize: "20px", fontFamily: "Roboto", cursor: "pointer" }}
              p={2}
              onClick={() =>
                navigate("/interview-qa/react-js-interview-questions")
              }>
              Top INTERVIEW QUESTIONS the React Js
            </Typography>
            <Typography
              align="center"
              variant="h3"
              sx={{ fontSize: "20px", fontFamily: "Roboto", cursor: "pointer" }}
              p={2}
              pb={8}
              onClick={() =>
                navigate("/interview-qa/node-js-interview-questions")
              }>
              Top INTERVIEW QUESTIONS of the Node Js
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
