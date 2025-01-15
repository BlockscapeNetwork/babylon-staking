const FooterBlockscape = () => {
  return (
    <footer
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ff8000",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          margin: 0,
        }}
      >
        <p style={{ margin: 0 }}>Blockscape | 2025</p>
        <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
          <a
            href="https://x.com/BlockscapeLab"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              width="12"
              height="12"
              fill="white"
              style={{
                verticalAlign: "middle",
                marginRight: "1rem",
                backgroundColor: "transparent",
              }}
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                fill="white"
              />
            </svg>
          </a>

          <a
            href="https://discord.gg/F7MsbeaHtb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 127.14 96.36"
              width="24"
              height="24"
              fill="white"
              style={{
                verticalAlign: "middle",
                marginRight: "1rem",
                backgroundColor: "transparent",
              }}
            >
              <path
                fill="#fff"
                d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
              />
            </svg>
          </a>
          <a
            href="https://blockscape.finance/en/imprint/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: "0.5rem",
              textDecoration: "none",
              color: "white",
            }}
          >
            Imprint
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterBlockscape;
