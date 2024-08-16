"use client";
import { useState } from "react";
import styles from "./apiData.module.css";
import Styles from "../page.module.css";

export default function Home() {
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
                  placeholder="Section Heading"
                />
              </div>
              <div className={styles.flexDown}>
                <label>Section Data</label>
                <textarea
                  name="paragraph"
                  value={section.paragraph}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Section Paragraph"
                  className={styles.paragraph}
                />
              </div>
              <button className={styles.removebutton} onClick={() => removeSection(index)}>Remove</button>
            </div>
          ))}
          <div className={styles.buttons}>
            <button className={Styles.button} onClick={addSection}>+ Add new Section</button>
            <button className={Styles.button}>Submit</button>
            <button className={styles.cancleButton}>Cancel</button>
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
