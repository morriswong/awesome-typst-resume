const resumeContent = `#show heading.where(level: 1): text.with(size: 30pt / 1.4, weight: "bold")
#show heading.where(level: 2): text.with(size: 15pt / 1.2, weight: "bold")
#show heading.where(level: 3): text.with(size: 11pt, weight: "bold")
#show link: underline

#set text(font: "Noto Sans", size: 10.5pt)
#set text(top-edge: 0.3em, bottom-edge: -0.3em)
#set par(leading: 0.9em)

#set page(
  margin: (x: 0.9cm, y: 1.3cm),
)

#set par(justify: true)

#let chiline() = {v(-5pt); line(length: 100%); v(-1pt)}

= John Doe

Anywhere, Earth | john.doe@example.com | +00 000 000 0000 #h(1fr) #link("https://example.com")[Portfolio] | #link("https://example.com")[LinkedIn] | #link("https://example.com")[Github]

== Professional Summary
#chiline()

Results-driven technology professional with experience in data analytics, engineering, and AI. Skilled in building scalable solutions and collaborating across teams. Passionate about leveraging technology to solve complex problems.

== Professional Experience
#chiline()

*Lead Data Engineer, ExampleTech Corp* #h(1fr) Jan 2024 -- Present \\  
International technology solutions provider #h(1fr) Remote \\  
- Designed and implemented a cloud-based data pipeline, reducing processing time by 60%.  
- Led a team of engineers to deliver a real-time analytics dashboard for enterprise clients.  
- Automated data quality checks, improving reliability and reducing manual intervention.  
- Coordinated cross-functional teams to deliver projects on schedule.`

export default resumeContent