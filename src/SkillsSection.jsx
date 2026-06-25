import React from 'react'

const skills = {
  languages: ["C", "HTML", "JavaScript", "SQL", "PHP"],
  frameworks: ["React", "React Native", "Node.js", "Express.js", "CSS", "Tailwind CSS", "Spring Boot"],
  tools: ["Git", "GitHub", "Figma", "Postman", "MySQL", "MongoDB", "PostgreSQL"],
};

const skillColors = {
  languages: { bg: "#EEEDFE", border: "#AFA9EC", text: "#3C3489" },
  frameworks: { bg: "#E1F5EE", border: "#9FE1CB", text: "#085041" },
  tools: { bg: "#FAEEDA", border: "#FAC775", text: "#633806" },
};

const SkillsSection = () => {
  return (
    <div style={{ padding: "3rem 2rem", backgroundColor: "#0d244d" }}>
      <h1 style={{ fontSize: 40,  color: "#f4f3ee", marginBottom: "1.5rem" }}>
        A little about me...
      </h1>

      {[
        { label: "Languages", key: "languages" },
        { label: "Frameworks & Libraries", key: "frameworks" },
        { label: "Tools & Databases", key: "tools" },
      ].map(({ label, key }) => (
        <div key={key} style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: "#666", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
            {label}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills[key].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: `0.5px solid ${skillColors[key].border}`,
                  background: skillColors[key].bg,
                  color: skillColors[key].text,
                  fontSize: 13,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsSection