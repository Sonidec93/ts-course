interface CourseGoal{
title:string,
description:string,
date:Date
}

function createCourseGoal(x:CourseGoal):CourseGoal{
    let courseGoal:Partial<CourseGoal>={};//Partial helps us to make all the property optional
    courseGoal.title='Typescript';
    courseGoal.description='Learning  ts';
    // courseGoal.date=new Date();
    

    return courseGoal as CourseGoal;
}