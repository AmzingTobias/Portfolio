import fs from "fs";
import path from "path";
const AgentSudoCTFPage = () => {
  const filePath = path.join(
    process.cwd(),
    "public\\ctf",
    "Agent Sudo CTF Writeup 8351ac91c6d94985b939e278c7d15e59.html"
  );
  const htmlContent = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="w-full">
      <div className="flex justify-center ">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </main>
  );
};

export default AgentSudoCTFPage;
