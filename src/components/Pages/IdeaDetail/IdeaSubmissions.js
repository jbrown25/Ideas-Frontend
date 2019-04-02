import React from 'react';
import {Link} from 'react-router-dom';

const IdeaSubmissions = props => {
	if(props.submissions.length === 0) return <div></div>;
	return (
		<div>
		{
			props.submissions.map((submission, i) => {
				return (
					<Submission
						key={i}
						repo_link={submission.repo_link}
						live_link={submission.live_link}
						description={submission.description}
						tags={submission.tags}
						username={submission.username} />
				);
			})
		}
		</div>
	);
};

const ShowTags = ({tags}) => (
	<ul>
		{ tags.map((tag, i) => <li key={i}><Link to={`/submissions/tag/${tag}`}>{tag}</Link></li>) }
	</ul>
);

const Submission = ({repo_link, live_link, description, tags, username}) => (
	<div>
		<a href={repo_link} target='_blank' rel='noopener noreferrer'><i className='fas fa-code'></i></a>
		{live_link ? <a href={live_link} target='_blank' rel='noopener noreferrer'><i className='fas fa-link'></i></a> : ''}
		<p>{description}</p>
		{tags ? <ShowTags tags={tags} /> : ''}
		<p>{username}</p>
	</div>
);

export default IdeaSubmissions;