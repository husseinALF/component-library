import "./App.css";
import Button from "./Button";
import Childbutton from "./Childbutton";
import Alerts from "./Alerts";
import Badges from "./Badges";
import Card from "./Card";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  function onClose(setShow) {
    setShow(false);
  }
  return (
    <div className="flex justify-center items-center flex-col gap-7">
      <div className=" flex justify-center items-center flex-col gap-7 border-2 border-blue-800 p-8">
        <h2>Buttons</h2>
        <Button color="red" size="small" />
        <Button color="blue" size="large" disabled={true} />
        <Childbutton>default</Childbutton>
      </div>
      <div className=" flex justify-center items-center flex-col gap-7 border-2 border-blue-800 p-8">
        <h2>Alerts</h2>
        <Alerts
          icon="info"
          color="success"
          onDismiss={() => alert("Alert dismissed!")}
        >
          <span>
            <span className="font-medium">Info alert!</span> Change a few things
            up and try submitting again.
          </span>
        </Alerts>
      </div>
      <div className=" flex justify-center items-center  gap-7 border-2 border-blue-800 p-8">
        <h2>Badges</h2>
        <Badges color="default" size="small">
          default
        </Badges>
        <Badges color="dark" size="small">
          dark
        </Badges>
        <Badges color="warning" size="large">
          warning
        </Badges>
        <Badges size="large" icon="check" />
      </div>
      <div className=" flex justify-center items-center flex-col gap-7 border-2 border-blue-800 p-8 max-w-sm">
        <h2>Card</h2>
        <div>
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            href="https://www.google.com/"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-7 border-2 border-blue-800 p-8">
        <h2>Modal</h2>

        <button
          className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600  group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
          onClick={() => {
            setShow(true);
          }}
        >
          Open modal
        </button>
        <Modal size="small" show={show} onClose={() => onClose(setShow)}>
          <Modal.Header> This is a modal popup! </Modal.Header>
          <Modal.Body>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            officia explicabo ducimus aspernatur quae modi porro consectetur in?
            Non nam dicta, magnam ea dolorum dignissimos a minima labore
            repudiandae nihil.
          </Modal.Body>
          <Modal.Footer
            onClose={() => {
              onClose(setShow);
            }}
          >
            Accept!
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default App;
