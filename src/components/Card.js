import React from 'react'

const card = ({name, email ,id}) => {
    return(
        <div className="bg-light-green dib tc br3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robots"></img>
            <h2 className="tc">{ name }</h2>
            <p>{ email }</p>
        </div>
    );

}

export default card;