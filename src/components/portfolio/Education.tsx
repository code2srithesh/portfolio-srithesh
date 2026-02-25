import Section from "./Section";

const education = [
  {
    institution: "Vellore Institute of Technology (VIT-AP), Amaravati",
    degree: "Integrated M.Tech in Software Engineering",
    period: "2022 – 2027",
    score: "CGPA: 8.74",
  },
  {
    institution: "Bharathi Junior College (VMC)",
    degree: "Intermediate (IPE Telangana)",
    period: "",
    score: "Percentage: 93.3%",
  },
  {
    institution: "Srinidhi Olympiad School",
    degree: "Secondary School (State Board)",
    period: "",
    score: "GPA: 10/10",
  },
];

const Education = () => (
  <Section id="education" title="Education" label="02 — Academic">
    <div className="space-y-4">
      {education.map((item, i) => (
        <div
          key={i}
          className="group p-6 rounded-2xl glass glass-hover transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg">{item.institution}</h3>
              <p className="text-muted-foreground mt-1">{item.degree}</p>
            </div>
            <div className="sm:text-right shrink-0">
              {item.period && (
                <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              )}
              <p className="font-mono text-sm text-primary font-medium mt-1">{item.score}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Education;
