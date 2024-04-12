'use client'
import { SKILL_GET, SKILL_POST } from './utils/api_calls';
import { useState, useEffect } from 'react';

interface Skill {
	name: string;
	description: string;
}

async function getSkills(): Promise<Skill[]> {
	let skills: Skill[] = [];

	const response = await fetch(SKILL_GET());
	if (response.ok) {
		const json = await response.json();
		if (json.length > 0) {
			skills = json;
		} else {
			console.error('Empty JSON response');
		}
	} else {
		console.error(`Error fetching data: ${response.status}`);
	}
	return skills;
}

export default function Page() {
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		(async () => {
			const fetchedSkills = await getSkills();
			setSkills(fetchedSkills);
		})();
	}, []);

	const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get('name');
		const description = formData.get('description');
		const body = JSON.stringify({name, description});
		const res = await fetch(SKILL_POST(), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: body,
		});

		if (res.ok) {
			const fetchedSkills = await getSkills();
			setSkills(fetchedSkills);
		} else {
			console.error(`Error submitting form: ${res.status}`);
		}
	};


	return (
		<div>
			<form onSubmit={onFormSubmit}>
				<label>Name: </label>
				<input type="text" name="name" />
				<label>Description: </label>
				<input type="text" name="description" />
				<button type="submit">Submit</button>
			</form>
			<ul>
				{skills.map((skill) => (
					<li key={skill.name}>{skill.name}: {skill.description}</li>
				))}
			</ul>
		</div>
	);
}
