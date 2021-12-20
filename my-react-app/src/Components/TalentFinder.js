import { useEffect } from 'react';

export default function TalentFinderComponent(props) {
  const inputArray = [{
    "id": "1",
    "name": "Forrest",
    "skills": ["nodejs", "mongodb", "redis", "socketio"]
  }, {
    "id": "2",
    "name": "Chris",
    "skills": ["nodejs", "express"]
  }, {
    "id": "3",
    "name": "Amy",
    "skills": ["scala", "go"]
  }];
  const searchString = 'nodejs,express';
  let foundCandidate = {};

  useEffect(() => {
    for (const c of inputArray) {
      const matchedCount = c.skills.reduce((acc, i) => {
        acc += searchString.split(",").includes(i) ? 1 : 0;
        return acc;
      }, 0);

      if (matchedCount > 0) {
        if (Object.keys(foundCandidate).length === 0 || foundCandidate.matchedCount < matchedCount) {
          c.matchedCount = matchedCount;
          foundCandidate = c;
        }
      }
    }
    if (Object.keys(foundCandidate).length > 0) {
      delete foundCandidate.matchedCount;
      console.log(foundCandidate);
    } else {
      console.log('No candidate found');
    }
  }, [searchString]);

  return (<>    </>);
}
