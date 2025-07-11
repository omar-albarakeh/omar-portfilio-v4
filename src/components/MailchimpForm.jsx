import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";
import { Alert } from "react-bootstrap";
import { useMemo } from "react";

const MailchimpForm = () => {
const u = import.meta.env.VITE_MAILCHIMP_U;
const id = import.meta.env.VITE_MAILCHIMP_ID;
const url = import.meta.env.VITE_MAILCHIMP_URL;


  const isConfigValid = u && id && url;

  const postUrl = useMemo(() => {
    return isConfigValid ? `${url}?u=${u}&id=${id}` : null;
  }, [u, id, url]);

  if (!isConfigValid) {
    console.warn("❌ Mailchimp configuration missing in .env file.");
    return (
      <Alert variant="warning" className="my-3">
        Mailchimp integration is not configured correctly. Please contact the
        site administrator.
      </Alert>
    );
  }

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailchimpForm;
