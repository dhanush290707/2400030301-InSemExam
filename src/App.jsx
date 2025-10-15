body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

header {
  background: #333;
  color: white;
  text-align: center;
  padding: 1.5rem;
}

.about, .projects {
  padding: 20px;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.project {
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  flex: 1 1 calc(33.33% - 40px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Footer */
footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}

/* Responsive Layout */
@media (max-width: 768px) {
  .project {
    flex: 1 1 calc(50% - 40px);
  }
}

@media (max-width: 500px) {
  .project {
    flex: 1 1 100%;
  }
}
