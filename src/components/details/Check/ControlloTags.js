import React from "react";

//return html with tags
export default function CheckTag(props) {
  if (props.tags) {
    const hashtags = [];
    console.log(props.tags);
    props.tags.map((tag, index) =>
      tag.map((hash) => {
        if (hashtags.indexOf(hash.nome_label) === -1)
          hashtags.push(hash.nome_label);
      })
    );

    /*console.log(hashtags);*/

    return (
      <div className="hashDisplay">
        {hashtags &&
          hashtags.map((tag, index) => (
            <p className={!tag ? "hidden" : "hashtag"} key={index}>
              <span>#{tag}</span>
            </p>
          ))}
      </div>
    );
  } else {
    return <p />;
  }
  // const tags=(props.tags).split(" ", 10);
  // return(
  //   <div className='hashDisplay'>
  //     {tags.map((tag, index) => (
  //       <p className={!tag ? 'hidden' : 'hashtag'} key={index}><span>#{tag}</span></p>
  //     ))}
  //   </div>
  // )
}
