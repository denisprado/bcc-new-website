import CookieConsent from "react-cookie-consent";

const CookiesNotice: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Tudo bem!"
      cookieName="myCookieConsent"
      style={{ background: "#1a202c", textAlign: "center" }}
      buttonStyle={{
        color: "#fff",
        fontSize: "13px",
        backgroundColor: "#3182ce",
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
