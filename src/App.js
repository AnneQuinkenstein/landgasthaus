import React from "react";
import { Parallax } from "react-parallax";
import "./App.css";

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
              className="logo"
              src={process.env.PUBLIC_URL + "/img/imageedit_9_4031107841.png"}
              alt="logo"
            />
            <h1>in Eulgem</h1>
          </div>
        </div>
      </Parallax>
      <div className="inbetween">
        <div className="box1">
          <p>
            Unser Gasthaus ist idyllisch gelegen im Schieferland zwischen Mayen,
            dem Tor zur Eifel und Cochem an der Mosel.{" "}
          </p>
          <p>
            Unsere Küche bietet Ihnen ein reichhaltiges leckeres Angebot an
            kleinen Speisen und Hauptgerichten sowie Salatvariationen und
            Eisdesserts.{" "}
          </p>
          <p>
            {" "}
            Größere Feierlichkeiten, wie z.B. Geburtstage, sind bis zu 65
            Personen möglich. Sehr gerne bieten wir in Absprache mit Ihnen auch
            ein Menüfolge an.
          </p>
        </div>
        <div className="box2">
          <div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/FB_IMG_Benediktiner.jpg"}
                alt="Schild"
              />
            </div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/IMG-20200815-WA0002.jpg"}
                alt="Schild"
              />
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/FB_IMG_Biergarten2.jpg"}
                alt="Biergarten"
              />
            </div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/FB_IMG_Schieferland.jpg"}
                alt="Schild"
              />
            </div>
          </div>
        </div>
      </div>
      <Parallax
        bgImage={process.env.PUBLIC_URL + "/img/Kuchen.png"}
        strength={600}
      >
        <div style={{ height: 800 }}>
          <div style={inlineStyle}></div>
        </div>
      </Parallax>
      <div className="inbetween">
        <div className="box1">
          <p>
            Genießen Sie bei gutem Wetter Ihren Aufenthalt in unserem
            gemütlichen Biergarten.
          </p>
          <p>
            {" "}
            Übernachtungen sind in der angeschlossenen Pension (3 Doppelzimmer)
            möglich. Zudem gibt es eine separate Ferienwohnung.{" "}
          </p>
          <p>
            Unsere Lage bietet die ideale Basis für einen erholsamen Urlaub oder
            Wochenende mit schönen Wandermöglichkeiten. Zur Moselregion sind es
            nur 16 km. Laacher See, Nürburgring, Burg Eltz, Trier, Koblenz und
            die Maarregion sind schnell mit dem Auto zu erreichen!{" "}
          </p>
          <p>Wir freuen uns Sie bei uns begrüßen zu dürfen.</p>
        </div>
        <div className="box2">
          <div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/20210419_175900.jpg"}
                alt="Schild"
              />
            </div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/FB_IMG_Biergarten1.jpg"}
                alt="Schild"
              />
            </div>
          </div>
          <div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/20210419_175925.jpg"}
                alt="Biergarten"
              />
            </div>
            <div className="imgContainer">
              <img
                src={process.env.PUBLIC_URL + "/img/panorama-5332396_1920.jpg"}
                alt="Schild"
              />
            </div>
          </div>
        </div>
      </div>
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
        <div style={{ height: 800 }}>
          <div style={inlineStyle}>
            <p>Genießen Sie bei gutem Wetter Ihren Aufenthalt</p>
            <p>in unserem gemütlichen Biergarten.</p>
          </div>
        </div>
      </Parallax>
      <div className="footer">
        <div>
          <p>Kontakt: </p>
          <p>Gasthaus Reichert </p>
          <p> Hauptstr. 4 </p>
          <p>Eulgem </p>
          <p> Tel: 02653 7864</p>
        </div>
        <div>
          <p>Öffnungszeiten der Küche:</p>
          <p> Donnerstag bis Samstag von 17:00 Uhr bis 20:00 Uhr </p>
          <p>
            {" "}
            Sonntag von 11:30 Uhr bis 14:00 Uhr und von 17:00 Uhr bis 20:00 Uhr
          </p>
          <p>
            Das Gasthaus ist jeweils bis 23:00 Uhr geöffnet Montag bis Mittwoch
            Ruhetag{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
