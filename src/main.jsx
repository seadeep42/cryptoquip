import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import _ from "lodash";

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const Application = () => {
  const [sourceText, setSourceText] = useState(`PFLF'X XDZFKPYOE KD KPYON TRDIK:
PDA GDZF JDI OFBFL XFF T PFTUVYOF
VYNF WXJGPYG AYOX VDKKFLJ'?`);

  const [letterSubstitutions, setLetterSubstitutions] = useState({});

  const lines = sourceText.split("\n");
  return (
    <>
      <div className="puzzle">
        {_.map(lines, line => {
          const lineLetters = _.map(_.split(line, ""), _.toLower);
          const substitutedLineLetters = _.map(lineLetters, l => {
            if (_.includes(letters, l)) {
              return letterSubstitutions[l] || "_";
            }
            return l;
          })
          return (
            <>
              <div className="line">
                {
                  _.map(lineLetters, l => l)
                }
              </div>
              <div className="substituted-line">
                {
                  _.map(substitutedLineLetters, l => l)
                }
              </div>
            </>
          )
        })}
      </div>
      <div className="substitutions">
        {
          _.map(letters, l => (
            <div className="letter-item">
              {l}<br />
              <input value={letterSubstitutions[l] || "" } onChange={e => setLetterSubstitutions({
                ...letterSubstitutions,
                [l]: e.target.value,
              })} />
            </div>
          ))
        }
      </div>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Application/>);
