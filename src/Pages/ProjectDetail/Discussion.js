import React, { useContext } from "react";
import './Description.scss'
import MainLayout from '../../Components/MainLayout/MainLayout'
import ProjectToggle from "../../Components/ProjectToggle/ProjectToggle";
import ProjectCarousel from "../../Components/ProjectCarousel/ProjectCarousel";
import { ProjectContext } from "../../contexts/ProjectContext";
import DiscussionDetails from "../../Components/DisussionDetails/DiscussionDetails";
import ProjectNav from "../../Components/ProjectNav/ProjectNav";
const Discussion = () => {

  const { projects, loading } = useContext(ProjectContext);

  if (loading) {
    return (
      <div>
        <MainLayout/>
        <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "90vh" }}
      >
        <div className="spinner-border" role="status"></div>
        <div className="mt-3">Loading projects...</div>
      </div>
      </div>

    );
  }

  return projects.length === 0 ? (
    <><MainLayout/>
    <div className="container not-found">
      <h2
        style={{
          display: "inline-block",
          paddingLeft: "20px",
          color: "var(--primaryColor)",
        }}
      >
        NOT FOUND
      </h2>
    </div>
    </>
  ) : (
    <>
    <MainLayout/>
    <ProjectCarousel/>
    <ProjectToggle/>
    <ProjectNav/>
    <div className="details__container">
    <DiscussionDetails/></div>
    </>
  );
};

export default Discussion;