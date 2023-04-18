import CookieConsent from "react-cookie-consent";

const CookiesNotice: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Tudo bem!"
      cookieName="myCookieConsent"
      style={{
        background: "#1e2a4d",
        textAlign: "center",
        opacity: "0.8",
        padding: "20px",
      }}
      buttonStyle={{
        color: "#fff",
        fontSize: "13px",
        backgroundColor: "#75b847",
        borderRadius: "5px",
      }}
      expires={150}
    >
      <p className="text-white">
        Nós usamos cookies para melhorar a sua experiência.
      </p>
    </CookieConsent>
  );
};

export default CookiesNotice;
