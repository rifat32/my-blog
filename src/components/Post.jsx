import Markdown from 'markdown-to-jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Code from './Code';

const Post = () => {
  const { file } = useParams(); // Get the file name from the URL params
  const [postContent, setPostContent] = useState('#Hello');

  useEffect(() => {
    if (file) {
      import(`../markdown/${file}`).then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((response) => setPostContent(response))
          .catch((err) => console.log(err));
      });
    }
  }, [file]);

  return (
    <article className='article'>
      <div className='container'>
        <div className='post-wrapper'>
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                },
              },
            }}
          >
            {postContent}
          </Markdown>
        </div>
      </div>
    </article>
  );
};

export default Post;
