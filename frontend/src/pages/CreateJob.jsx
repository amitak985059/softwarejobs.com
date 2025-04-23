import React, { useState } from 'react';
import axios from 'axios';
const CreateJob = () => {
    const [company, setCompany] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [salary, setSalary] = useState('');
    const [eligibleBatch, setEligibleBatch] = useState('');
    const [jobLink, setJobLink] = useState('');
    const [expectedCtc, setExpectedCtc] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/jobs/createjob', {
                company,
                jobTitle,
                jobDescription,
                jobLocation,
                jobType,
                salary,
                eligibleBatch,
                jobLink,
                expectedCtc
            });
            console.log(response.data);
            setCompany('');
            setJobTitle('');
            setJobDescription('');
            setJobLocation('');
            setJobType('');
            setSalary('');
            setEligibleBatch('');
            setJobLink('');
            setExpectedCtc('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center">Create a Job</h1>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm">
                    <div>
                        <label htmlFor="company" className="sr-only">Company</label>
                        <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Company" />
                    </div>
                    <div>
                        <label htmlFor="jobTitle" className="sr-only">Job Title</label>
                        <input type="text" id="jobTitle" value={jobTitle} onChange={e => setJobTitle(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Job Title" />
                    </div>
                    <div>
                        <label htmlFor="jobDescription" className="sr-only">Job Description</label>
                        <textarea id="jobDescription" value={jobDescription} onChange={e => setJobDescription(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Job Description" />
                    </div>
                    <div>
                        <label htmlFor="jobLocation" className="sr-only">Job Location</label>
                        <input type="text" id="jobLocation" value={jobLocation} onChange={e => setJobLocation(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Job Location" />
                    </div>
                    <div>
                        <label htmlFor="jobType" className="sr-only">Job Type</label>
                        <input type="text" id="jobType" value={jobType} onChange={e => setJobType(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Job Type" />
                    </div>
                    <div>
                        <label htmlFor="salary" className="sr-only">Salary</label>
                        <input type="text" id="salary" value={salary} onChange={e => setSalary(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Salary" />
                    </div>
                    <div>
                        <label htmlFor="eligibleBatch" className="sr-only">Eligible Batch</label>
                        <input type="text" id="eligibleBatch" value={eligibleBatch} onChange={e => setEligibleBatch(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Eligible Batch" />
                    </div>
                    <div>
                        <label htmlFor="jobLink" className="sr-only">Job Link</label>
                        <input type="text" id="jobLink" value={jobLink} onChange={e => setJobLink(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Job Link" />
                    </div>
                    <div>
                        <label htmlFor="expectedCtc" className="sr-only">Expected CTC</label>
                        <input type="text" id="expectedCtc" value={expectedCtc} onChange={e => setExpectedCtc(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Expected CTC" />
                    </div>
                </div>

                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateJob;
