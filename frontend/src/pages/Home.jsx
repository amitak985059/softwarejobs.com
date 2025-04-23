import React, { useEffect, useState } from 'react';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const res = await fetch('http://localhost:4000/jobs/getjobs'); 
  //       const data = await res.json();
  //       setJobs(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error('Error fetching jobs:', err);
  //       setError(true);
  //       setLoading(false);
  //     }
  //   };

  //   fetchJobs();
  // }, []);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:4000/jobs/getjobs');
        const data = await res.json();
        // console.log("Fetched data:", data);
        setJobs(data.data); // Make sure this is an array
        setLoading(false);
      } catch (err) {
        // console.error("Failed to fetch jobs", err);
        setError(true);
        setLoading(false);
      }
    };
  
    fetchJobs();
  }, []);
  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Failed to load jobs.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Available Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-semibold text-blue-600">{job.jobTitle}</h2>
            <p className="text-gray-700 mb-2">{job.company}</p>
            <p className="text-sm text-gray-500 mb-4">{job.jobLocation} · {job.jobType}</p>
            <p className="text-gray-800 mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-800 mb-2"><strong>Expected CTC:</strong> {job.expectedCtc}</p>
            <p className="text-gray-800 mb-2"><strong>Batch:</strong> {job.eligibleBatch}</p>
            <p className="text-gray-700 mb-4">{job.jobDescription}</p>
            <a
              href={job.jobLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
