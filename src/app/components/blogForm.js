"use client";
import { useState } from "react";
import styles from "./apiData.module.css";
import Styles from "../page.module.css";

// Import the Firebase function
import { writeBlogData } from '../path-to-your-firebase-file';

export default function BlogSession({ onCancel }) {
  const [sections, setSections] = useState([]);
  const [mainHeading, setMainHeading] = useState("");
  const [mainParagraph, setMainParagraph] = useState("");

  function addSection() {
    setSections([...sections, { heading: "", paragraph: "" }]);
  }

  function removeSection(index) {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(newSections);
  }

  function handleInputChange(index, e) {
    const { name, value } = e.target;
    const newSections = [...sections];
    newSections[index][name] = value;
    setSections(newSections);
  }

  function handleMainHeadingChange(e) {
    setMainHeading(e.target.value);
  }

  function handleMainParagraphChange(e) {
    setMainParagraph(e.target.value);
  }

  function handleSubmit() {
    const title = mainHeading;
    const description = sections.map(section => section.heading + ": " + section.paragraph).join("\n");
    const date = new Date().toLocaleDateString();
    const authorName = "Agrim"; // Replace with dynamic data if needed
    const vote = "0"; // Initial vote count or whatever value you need

    writeBlogData(title, mainParagraph + "\n" + description, date, authorName, vote);

    alert("Blog submitted successfully!");
  }

  return (
    <main className={styles.mainblog}>
      <div className={styles.gridContainer}>
        <div id="addmore" className={styles.descriptionBlog}>
          <h1 className={Styles.gradienttext}>Create Your Blog</h1>
          <div className={styles.flexDown}>
            <label>Main Title</label>
            <input
              type="text"
              className={styles.headingmain}
              placeholder="Title Goes Here"
              value={mainHeading}
              onChange={handleMainHeadingChange}
            />
          </div>
          <div className={styles.flexDown}>
            <label>Introduction</label>
            <textarea
              className={styles.paragraph}
              placeholder="Introduction Goes Here..."
              value={mainParagraph}
              onChange={handleMainParagraphChange}
            />
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <div className={styles.flexDown}>
                <label>Section Heading</label>
                <input
                  type="text"
                  name="heading"
                  value={section.heading}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Section Heading..."
                />
              </div>
              <div className={styles.flexDown}>
                <label>Section Data</label>
                <textarea
                  name="paragraph"
                  value={section.paragraph}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Section Paragraph..."
                  className={styles.paragraph}
                />
              </div>
              <button className={styles.removebutton} onClick={() => removeSection(index)}>Remove</button>
            </div>
          ))}
          <div className={styles.buttons}>
            <button className={Styles.button} onClick={addSection}>+ Add new Section</button>
            <button className={Styles.button} onClick={handleSubmit}>Submit</button>
            <button className={styles.cancleButton} onClick={onCancel}>Cancel</button>
          </div>
        </div>
        <div className={styles.preview}>
          <span>preview...</span>
          <div className={styles.content}>
            <h3>{mainHeading}</h3>
            <p>{mainParagraph}</p>
            {sections.map((section, index) => (
              <div key={index}>
                <h4>{section.heading}</h4>
                <p>{section.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
