import React, { useState } from "react";

export default function App() {
  const [startaddvisible, setstartaddvisible] = useState(true);
  const [loader, setloader] = useState(false);
  const [secondarr, setsecondarr] = useState([
    { visible: false, name: "Second1", addbtn: true },
    { visible: false, name: "Second2", addbtn: true },
  ]);
  const [thirdarr, setthirdarr] = useState([
    { visible: false, name: "Third1", addbtn: true },
    { visible: false, name: "Third2", addbtn: true },
    { visible: false, name: "Third3", addbtn: true },
    { visible: false, name: "Third4", addbtn: true },
  ]);

  const Addstart = () => {
    console.log("addstart");
    let a = prompt("Enter elements no:(Eg: 1 or 2)");
    if (a == 1) {
      setstartaddvisible(false);
      let arr = secondarr;
      arr[1].visible = true;
      setsecondarr(arr);
    } else if (a == 2) {
      setstartaddvisible(false);
      let arr = secondarr;
      arr[0].visible = true;
      arr[1].visible = true;
      setsecondarr(arr);
    } else {
      alert("Invalid input.");
    }
  };

  const Addsecond = (index) => {
    let a = prompt("Enter elements no:(Eg: 1 or 2)");
    console.log(a);
    if (a == 1) {
      if (index == 0) {
        let arr2 = thirdarr;
        arr2[1].visible = true;
        setthirdarr(arr2);
        console.log(arr2);
        setloader(!loader);

        let arr = secondarr;
        arr[0].addbtn = false;
        setsecondarr(arr);
      } else {
        let arr2 = thirdarr;
        arr2[2].visible = true;
        setthirdarr(arr2);
        console.log(arr2);
        setloader(!loader);

        let arr = secondarr;
        arr[1].addbtn = false;
        setsecondarr(arr);
      }
    } else if (a == 2) {
      if (index == 0) {
        let arr2 = thirdarr;
        arr2[0].visible = true;
        arr2[1].visible = true;
        setthirdarr(arr2);
        console.log(arr2);
        setloader(!loader);

        let arr = secondarr;
        arr[0].addbtn = false;
        setsecondarr(arr);
      } else {
        let arr2 = thirdarr;
        arr2[3].visible = true;
        arr2[2].visible = true;
        setthirdarr(arr2);
        console.log(arr2);
        setloader(!loader);

        let arr = secondarr;
        arr[1].addbtn = false;
        setsecondarr(arr);
      }
    } else {
      alert("Invalid input.");
    }
  };

  const deletesecond = (index) => {
    console.log("delsecond");
    if (index == 0) {
      let arr = secondarr;
      arr[0].visible = false;

      let arr2 = thirdarr;
      arr2[0].visible = false;
      arr2[1].visible = false;
      setthirdarr(arr2);
      console.log(arr2);
      setloader(!loader);
    } else if (index == 1) {
      let arr = secondarr;
      arr[1].visible = false;
      setsecondarr(arr);

      let arr2 = thirdarr;
      arr2[2].visible = false;
      arr2[3].visible = false;
      setthirdarr(arr2);
      console.log(arr2);
      setloader(!loader);
    }
  };

  const deletethird = (index) => {
    console.log("delthird");
    if (index == 0) {
      let arr2 = thirdarr;
      arr2[0].visible = false;
      setthirdarr(arr2);
      console.log(arr2);
      setloader(!loader);
    } else if (index == 1) {
      let arr2 = thirdarr;
      arr2[1].visible = false;
      setthirdarr(arr2);
      console.log(arr2);
      setloader(!loader);
    } else if (index == 2) {
      let arr2 = thirdarr;
      arr2[2].visible = false;
      setthirdarr(arr2);
      console.log(arr2);
      setloader(!loader);
    } else if (index == 3) {
      let arr2 = thirdarr;
      arr2[3].visible = false;
      setthirdarr(arr2);
      console.log(arr2);
      setloader(!loader);
    } else {
    }
  };

  return (
    <div className="main">
      {loader ? <div>+</div> : <div>-</div>}
      <div className="startrow">
        <div className="element">Start</div>
        <div className="vrline"></div>
        {startaddvisible ? (
          <div className="addbtn" onClick={Addstart}>
            +
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* second */}
      <div className="row2">
        {secondarr.map((a1, index) => {
          return (
            <div className="box" key={index}>
              {a1.visible ? (
                <>
                  <div className="vrline"></div>
                  <div className="element">{a1.name}</div>
                  <div
                    className="deleat"
                    onClick={() => {
                      deletesecond(index);
                    }}
                  >
                    <img
                      src="/menu.png"
                      class="img"
                      alt="Responsive image"
                    ></img>
                  </div>
                  <div className="vrline"></div>
                  {a1.addbtn ? (
                    <div
                      className="addbtn"
                      onClick={() => {
                        Addsecond(index);
                      }}
                    >
                      +
                    </div>
                  ) : (
                    <div className="smallvrline"></div>
                  )}
                </>
              ) : null}
            </div>
          );
        })}
      </div>
      {/* third */}
      <div className="row2">
        {thirdarr.map((a1, index) => {
          return (
            <div className="box" key={index}>
              {a1.visible ? (
                <>
                  <div className="vrline"></div>
                  <div className="element">{a1.name}</div>
                  <div
                    className="deleat"
                    onClick={() => {
                      deletethird(index);
                    }}
                  >
                    <img
                      src="/menu.png"
                      class="img"
                      alt="Responsive image"
                    ></img>
                  </div>
                  <div className="vrline"></div>
                  {a1.addbtn ? (
                    <div className="addbtnend">End</div>
                  ) : (
                    <div className="smallvrline"></div>
                  )}
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
