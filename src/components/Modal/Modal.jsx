import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({closeModal}) => {
  return ReactDOM.createPortal(
    <div onClick={() => closeModal()} className="modal__overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal__container">
        <section className="upper_section">
          <h1>A Developing Story!</h1>
          <p onClick={() => closeModal()} className="exit">&times;</p>
        </section>
        <section className="middle_section">
          <h3>All Is Well That Ends Well - <span className="sub-heading">A Story that inspires!</span></h3>
          <p>
            I was very sad the very first day I saw {`</>`} (angular brackets) in html
            tags over a year ago. Oh nooo! What is this? ... Today I look back and
            😁😍😍. <br/>All it it took was simply a desire to overcome. Life&apos;s
            journey can be like that - all you need is to keep going; and find
            some good company too. Today, I&apos;m a web developer!!! <br/>
            <a
              href="https://github.com/lcim?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Click me🤷‍♂️ to see some of my codes.
            </a>
          </p>

          <h3>My Companions:</h3>
          <p className="appreciation">
            I was able to get this far with resources and I appreciate people
            like:
          </p>
            <ul>
              <li className="list">
                <a className="ank"
                  href="https://twitter.com/bobziroll"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bob Ziroll
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/MadhavBahlMD"
                  target="_blank"
                  rel="noreferrer"
                >
                  Madhav Bahl
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yu_angela"
                  target="_blank"
                  rel="noreferrer"
                >
                  Angela Yu
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yesdavidgray"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dave Gray
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/georgeiwu"
                  target="_blank"
                  rel="noreferrer"
                >
                  George Iwu
                </a>
              </li>
            </ul>
        </section>
        <section className="lower_section">
          <a onClick={() => closeModal()} className="btn-modal btn-red">Exit</a>
          <a
            href="https://github.com/lcim?tab=repositories"
            className="btn-modal btn-green"
            target="_blank"
            rel="noreferrer"
          >
            GoTo My Page
          </a>
        </section>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
