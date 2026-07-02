const fs = require("node:fs");
const path = require("node:path");

function findStandaloneServer() {
  const root = path.join(process.cwd(), ".next", "standalone");
  const direct = path.join(root, "server.js");

  if (fs.existsSync(direct)) {
    return direct;
  }

  if (!fs.existsSync(root)) {
    return null;
  }

  const queue = [root];

  while (queue.length > 0) {
    const currentDir = queue.shift();
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "node_modules") {
          continue;
        }

        queue.push(fullPath);
        continue;
      }

      if (entry.isFile() && entry.name === "server.js") {
        return fullPath;
      }
    }
  }

  return null;
}

const serverPath = findStandaloneServer();

if (!serverPath) {
  console.error(
    "Standalone server entrypoint not found. Run 'npm run build' before 'npm run start'."
  );
  process.exit(1);
}

require(serverPath);
