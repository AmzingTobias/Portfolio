import fs from "fs";
import path from "path";
const ValleyCTFPage = () => {
  const filePath = path.join(
    process.cwd(),
    "public/ctf",
    "Valley CTF Writeup 27425707325b4fa3a55a5337eeb00bdb.html"
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

export default ValleyCTFPage;
