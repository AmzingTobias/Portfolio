import fs from "fs";
import path from "path";
const AgentSudoCTFPage = () => {
  const filePath = path.join(
    process.cwd(),
    "public/ctf",
    "Mr Robot CTF Writeup 416c549ae1cf448686282b6141cc03c3.html"
  );
  const htmlContent = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="w-full">
      <div className="flex justify-center ">
        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </main>
  );
};

export default AgentSudoCTFPage;
