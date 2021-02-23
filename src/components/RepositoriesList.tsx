import React from 'react';
import { useState } from 'react';
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useSelectors'
const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepo } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchRepo(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button> Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading</h3>}
            {!loading && !error && data && <h3>{data.map(name => <div>{name}</div>)}</h3>}
        </div >
    )
}

export default RepositoriesList