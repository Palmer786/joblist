import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";
import Header from "./Header";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState({
    location: "",
    description: "",
  });
  const [isLoading, toggleLoading] = useState(null);

  const handleChange = (input) => (e) => {
    setSearch({ ...search, [input]: e.target.value });
  };

  const transformResponse = (res) => res.data;

  const fetchData = async (location, description) => {
    toggleLoading(true);
    axios
      .get(`positions.json`, {
        baseURL: "https://jobs.github.com/",
        params: {
          location: location,
          description: description,
        },
      })
      .then(transformResponse)
      .then(setJobs)
      .catch(console.error)
      .finally(() => toggleLoading(false));
  };
  useEffect(() => {
    fetchData("", "");
  }, []);

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="search-section">
          <div className="search-field">
            <h5>Job description</h5>
            <SearchInput
              placeholder="Filter by title, benefits, companies"
              value={search.description}
              onChange={() => handleChange("description")}
            />
          </div>
          <div className="search-field">
            <h5>Location</h5>
            <SearchInput
              placeholder="Filter by country, state, city or zip"
              value={search.location}
              onChange={() => handleChange("location")}
            />
          </div>
          <div className="search-button">
            <button
              onClick={() => {
                const { location, description } = search;
                fetchData(location, description);
              }}
            >
              Search
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="loading">
            <div className="circle" />{" "}
          </div>
        ) : null}
        <table className="job-list">
          <tbody>
            {jobs.map((job) => {
              const {
                id,
                type,
                company,
                location,
                description,
                title,
                company_url,
                how_to_apply,
                company_logo,
              } = job;
              return (
                <tr key={id} className="job">
                  <td className="title">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/${id}`,
                        state: {
                          id,
                          title,
                          type,
                          company,
                          location,
                          description,
                          company_url,
                          how_to_apply,
                          company_logo,
                        },
                      }}
                    >
                      <h4
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        {title}
                      </h4>
                    </Link>
                    <p>{company}</p>
                  </td>
                  <td className="location">
                    <p>{location}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default JobList;
