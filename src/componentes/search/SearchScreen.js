import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getMobilesByName } from '../../selectors/getMobilesByName';
import { ProdCard } from '../marcas/ProdCard';
// import { Mobiles } from '../../data/Mobiles';

export const SearchScreen = ( { history } ) => {

       const location = useLocation();
       
       const { q = '' } = queryString.parse( location.search);
        // console.log(q);
    

    const [ formValues, handleInputChange ] = useForm({
        searchText: q

    });

    const { searchText } = formValues;

    const MobilesFiltered = useMemo(() => getMobilesByName( q ), [q])



    const handleSearch =(e)=> {
        e.preventDefault();
        // console.log( searchText )
        history.push(`?q=${ searchText }`);
    }

    

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                    

                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                   
                    {
                        MobilesFiltered.map( mobil => (
                            <ProdCard
                                key={ mobil.id }
                                { ...mobil }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
