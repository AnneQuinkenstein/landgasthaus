import React from "react";
import { Parallax } from "react-parallax";
import './App.css'; 

const inlineStyle = {
  // background: '#fff',
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%)",
};

function App() {
  return (
    <div className="App">
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/img/pflanzen2.png"}
        strength={-200}
      >
        <div style={{ height: "100vh" }}>
        <div style={inlineStyle}>
            {" "}
            <h1>Herzlich Willkommen in unserem</h1>
            <img
              src={process.env.PUBLIC_URL + "/img/imageedit_9_4031107841.png"}
              alt="logo"
              style={{ width: "30vh" }}
            />
            <h1>in Eulgem</h1>
          </div>
        </div>
      </Parallax>
      <div  className="inbetween">
        <p>
          Unser Gasthaus ist idyllisch gelegen im Schieferland zwischen Mayen,
          dem Tor zur Eifel und Cochem an der Mosel. Unsere Küche bietet Ihnen
          ein reichhaltiges leckeres Angebot an kleinen Speisen und
          Hauptgerichten sowie Salatvariationen und Eisdesserts.
        </p>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/FB_IMG_Benediktiner.jpg"}
            alt="Schild"
            style={{ height: "180px" }}
            />
          />
          <img
            src={process.env.PUBLIC_URL + "/img/IMG-20200815-WA0002.jpg"}
            alt="Schild"
            style={{ height: "180px" }}
            />
          />
        </div>
      </div>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/img/Kuchen.png"}
        strength={600}
      >
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>
          </div>
        </div>
      </Parallax>
      <p>
        Größere Feierlichkeiten, wie z.B. Geburtstage, sind bis zu 65 Personen
        möglich. Sehr gerne bieten wir in Absprache mit Ihnen auch ein Menüfolge
        an.
      </p>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/img/Biergarten3.png"}
        strength={200}
        renderLayer={(precentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          ></div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Genießen Sie bei gutem Wetter Ihren Aufenthalt in unserem gemütlichen Biergarten.</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
