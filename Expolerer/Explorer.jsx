import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";

const Explorer = () => {
  const initialStructure = {
    root: {
      type: "folder",
      contents: {
        Documents: {
          type: "folder",
          contents: {
            "Resume.docx": { type: "file" },
            "Project.docx": { type: "file" },
          },
        },
        Music: {
          type: "folder",
          contents: {
            "Song1.mp3": { type: "file" },
            "Song2.mp3": { type: "file" },
          },
        },
        "Image.jpg": { type: "file" },
      },
    },
  };

  const [currentPath, setCurrentPath] = useState(["root"]);
  const [structure, setStructure] = useState(initialStructure);

  const navigateToFolder = (folder) => {
    setCurrentPath([...currentPath, folder]);
  };

  const goBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1));
    }
  };

  const getCurrentFolderContents = () => {
    let currentFolder = structure;
    currentPath.forEach((folder) => {
      currentFolder = currentFolder[folder]?.contents || currentFolder[folder];
    });
    return currentFolder;
  };

  const currentContents = getCurrentFolderContents();

  return (
    <div className="container mt-4 col-md-4">
      <h3>File Explorer</h3>
      <Button
        onClick={goBack}
        variant="secondary"
        disabled={currentPath.length === 1}
      >
        Back
      </Button>

      <ListGroup className="mt-3">
        {Object.keys(currentContents).map((item) => {
          const currentItem = currentContents[item];
          return (
            <ListGroup.Item
              key={item}
              onClick={() =>
                currentItem.type === "folder" && navigateToFolder(item)
              }
              action={currentItem.type === "folder"}
            >
              {currentItem.type === "folder" ? (
                <i className="fa fa-folder mr-2"></i>
              ) : (
                <i className="fa fa-file mr-2"></i>
              )}
              {item}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Explorer;
