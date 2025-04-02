import { getAuth } from 'firebase/auth';
import { Container, Row } from 'react-bootstrap';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
// import useLocalStorage from 'use-local-storage';
import ProfileSideBar from '../components/ProfileSideBar';
import ProfileMidBody from '../components/ProfileMidBody';

export default function ProfilePage() {
	// const [authToken, setAuthToken] = useLocalStorage('authToken', '');
	const auth = getAuth();
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	// useEffect(() => {
	// 	if (!authToken) {
	// 		navigate('/login');
	// 	}
	// }, [authToken, navigate]);

	if (!currentUser) {
		navigate('/login');
	}

	// const handleLogout = () => {
	// 	setAuthToken('');
	// };

	const handleLogout = () => {
		auth.signOut();
	};

	return (
		<>
			<Container>
				<Row>
					<ProfileSideBar handleLogout={handleLogout} />
					<ProfileMidBody />
				</Row>
			</Container>
		</>
	);
}
