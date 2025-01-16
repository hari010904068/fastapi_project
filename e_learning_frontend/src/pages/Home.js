import React, { useEffect, useState } from "react";
import { fetchCourses } from "../api";
import CourseCard from "../components/CourseCard";

function Home() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            const data = await fetchCourses();
            setCourses(data);
        };
        getCourses();
    }, []);

    return (
        <div>
            <h1>Available Courses</h1>
            <div>
                {courses.map((course) => (
                    <CourseCard key={course.id} title={course.title} description={course.description} />
                ))}
            </div>
        </div>
    );
}

export default Home;
