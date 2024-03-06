import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent: React.FC = () => {
  const [sections, setSections] = useState<any[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<any | null>(null);
  const [copySaved, setCopySaved] = useState<boolean>(false);

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const response = await axios.get('/api/sections');
      setSections(response.data);
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  const handleSelectSection = (section: any) => {
    setSelectedSection(section);
    setEditMode(true);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!selectedSection) return;

    const { name, value } = e.target;
    const updatedSection = { ...selectedSection };
    updatedSection.content[name] = value;

    setSelectedSection(updatedSection);
  };

  const handleUpdate = async (slug: string) => {
    if (!selectedSection) return;

    // Ensure selectedSection contains necessary fields
    const { title, description } = selectedSection.content;
    if (!title || !description) {
        console.error('Error: Title or description is missing in selectedSection');
        return;
    }

    try {
        await axios.put(`/api/sections?slug=${slug}`, selectedSection.content);
        await fetchSections();
        setEditMode(false);
    } catch (error) {
        console.error('Error updating section:', error);
    }
};


  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/sections?slug=${slug}`);
      await fetchSections();
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  };

  const handleSaveCopy = (section: any) => {
    localStorage.setItem('copiedSection', JSON.stringify(section));
    setCopySaved(true);
  };
 
  return (
    <div>
      {sections.map(section => (
        <div key={"index"+1}>
          {section.slug === 'image' && (
            <img src={section.content.url} alt="Section Image" />
          )}
          {section.slug === 'high-school' && (
            <div  key={"index"+1}>
              <h2>
                {editMode && selectedSection && selectedSection.slug === section.slug ? (
                  <input
                    type="text"
                    value={selectedSection.content.title || ''}
                    onChange={handleContentChange}
                    name="title"
                  />
                ) : (
                  section.content.title
                )}
              </h2>
              <h3>{section.content.subtitle}</h3>
              <img src={section.content.backgroundImage} alt="High School Background" />
            </div>
          )}
          {(section.slug === 'note-from-principal' ||
            section.slug === 'curriculum-description' ||
            section.slug === 'career-related-programme' ||
            section.slug === 'diploma-programme') && (
              <div key={"index"+1}>
                <h2>
                  {editMode && selectedSection && selectedSection.slug === section.slug ? (
                    <input
                      type="text"
                      value={selectedSection.content.title || ''}
                      onChange={handleContentChange}
                      name="title"
                    />
                  ) : (
                    section.content.title
                  )}
                </h2>
                <p>
                  {editMode && selectedSection && selectedSection.slug === section.slug ? (
                    <textarea
                      value={selectedSection.content.description || ''}
                      onChange={handleContentChange}
                      name="description"
                    />
                  ) : (
                    section.content.description
                  )}
                </p>
              </div>
            )}
          <button onClick={() => handleSelectSection(section)}>Update</button>
          <button onClick={() => handleDelete(section.slug)}>Delete</button>
          <button onClick={() => handleSaveCopy(section)}>Save Copy</button>
          {editMode && selectedSection && selectedSection.slug === section.slug && (
            <button onClick={() => handleUpdate(selectedSection.slug)}>Save Changes</button>
          )}
        </div>
      ))}
      {copySaved && <p>Copy of section saved to local storage!</p>}
    </div>
  );
};

export default YourComponent;
