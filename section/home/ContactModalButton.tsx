'use client';

import Modal from 'comp/Modal';
import { Dispatch, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';
import Button from 'ui/Button';
import Input from 'ui/Input';
import FancyNotify from 'util/FancyNotify';

type ContactModalButtonsProps = {
  onClose: () => void;
  name: string;
  email: string;
  requirements: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setRequirements: Dispatch<SetStateAction<string>>;
  setIsNameError: Dispatch<SetStateAction<boolean>>;
  setIsEmailError: Dispatch<SetStateAction<boolean>>;
};

type ModalContentProps = {
  requirements: string;
  setRequirements: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  isNameError: boolean;
  setIsNameError: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isEmailError: boolean;
  setIsEmailError: Dispatch<SetStateAction<boolean>>;
};

const isEmailValid = (email: string) => {
  const EmailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return EmailRegex.test(email);
};

const isFieldsValid = (name: string, email: string) => !!name && isEmailValid(email);

function ModalContent({
  requirements,
  setRequirements,
  name,
  setName,
  isNameError,
  setIsNameError,
  email,
  setEmail,
  isEmailError,
  setIsEmailError,
}: ModalContentProps) {
  return (
    <div className="">
      <p className="mb-1 text-sm sm:text-base">Please enter your name</p>
      <div className="mb-3">
        <Input
          placeholder="Your name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          onBlur={() => {
            if (!name) {
              setIsNameError(true);
            }
          }}
          errorMsg={isNameError ? 'Please enter your name' : undefined}
          onFocus={() => setIsNameError(false)}
        />
      </div>
      <p className="mb-1 text-sm sm:text-base">Please enter your email</p>
      <div className="mb-3">
        <Input
          onBlur={() => {
            if (!isEmailValid(email)) {
              setIsEmailError(true);
            }
          }}
          errorMsg={isEmailError ? 'Please enter valid email' : undefined}
          onFocus={() => setIsEmailError(false)}
          onChange={(ev) => setEmail(ev.target.value.trim())}
          value={email}
          placeholder="Your email"
        />
      </div>
      <p className="mb-1 text-sm sm:text-base max-w-sm">
        Please describe the problem/requirement you want us to solve (optional)
      </p>
      <Input
        placeholder="Your requirements"
        value={requirements}
        onChange={(ev) => setRequirements(ev.target.value)}
        rows={5}
      />
    </div>
  );
}

function ContactModalButtons({
  onClose,
  name,
  email,
  requirements,
  setName,
  setEmail,
  setRequirements,
  setIsNameError,
  setIsEmailError,
}: ContactModalButtonsProps) {
  return (
    <div className="flex justify-end">
      <Button
        clear
        secondary
        onClick={() => {
          setName('');
          setEmail('');
          setRequirements('');
          onClose();
        }}
      >
        cancel
      </Button>
      <Button
        onClick={async () => {
          if (!isFieldsValid(name, email)) {
            if (!name) {
              setIsNameError(true);
            } else {
              setIsEmailError(true);
            }
            toast.error('Please enter correct data and try again');
            return;
          }

          // await handleLeadSubmit({ name, email, requirements });

          FancyNotify({
            View: (
              <div>
                <p className="text-center mb-2 text-white">
                  We have received your details and we will contact you shortly!
                </p>
                <p className="text-center text-white mb-2">
                  You may get an email from us. Please check your inbox and spam
                  folder.
                </p>
              </div>
            ),
          });
          setName('');
          setEmail('');
          setRequirements('');
          onClose();
        }}
      >
        Send
      </Button>
    </div>
  );
}

export default function ContactModalButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const [requirements, setRequirements] = useState('');
  const [name, setName] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);

  return (
    <div className="">
      <Button onClick={() => setModalOpen(true)} cta>
        Contact Now
      </Button>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        title={<>We&apos;re happy to help &#x1F642;</>}
        footer={(
          <ContactModalButtons
            onClose={() => {
              setModalOpen(false);
            }}
            name={name}
            email={email}
            requirements={requirements}
            setName={setName}
            setEmail={setEmail}
            setRequirements={setRequirements}
            setIsNameError={setIsNameError}
            setIsEmailError={setIsEmailError}
          />
        )}
      >
        <ModalContent
          requirements={requirements}
          setRequirements={setRequirements}
          name={name}
          setName={setName}
          isNameError={isNameError}
          setIsNameError={setIsNameError}
          email={email}
          setEmail={setEmail}
          isEmailError={isEmailError}
          setIsEmailError={setIsEmailError}
        />
      </Modal>
    </div>
  );
}
