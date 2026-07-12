export const ogImageSize = { width: 1200, height: 630 };
export const ogImageAlt = "Sam Mishin, Webflow Developer & Designer";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#0047CC",
          fontSize: 24,
          fontFamily: "monospace",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#0047CC",
            display: "flex",
          }}
        />
        <span>// mishinwebsites.com</span>
      </div>
      <div style={{ display: "flex", color: "#FFFFFF", fontSize: 96, fontWeight: 700 }}>
        Sam Mishin
      </div>
      <div style={{ display: "flex", color: "#EBF0FF", fontSize: 40, marginTop: "12px" }}>
        Webflow Developer &amp; Designer
      </div>
      <div
        style={{
          display: "flex",
          width: 120,
          height: 4,
          backgroundColor: "#0047CC",
          marginTop: "40px",
        }}
      />
    </div>
  );
}
