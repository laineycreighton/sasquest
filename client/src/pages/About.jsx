// INCLUDES:
//          - return:
//                  -   Header
//                  -   Back Button
//                  -   Article
//
//
//
//
//

const About = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>SASQUEST</h1>
        <h4>tame your beast</h4>
      </header>
      {/* Back Button */}
      <button onClick={() => window.history.back()}>BACK</button>
      {/* Article */}
      <article>
        <p>
          Embracing the challenge of a project is like taming a beast! For a
          software developer, curating an engaging portfolio is the secret to
          capturing the attention of potential employers. But let's admit it,
          embarking on a project beyond the confines of a structured environment
          can feel like stepping into the unknown. Fear not, Sasquest will be
          your trusty companion on this exhilarating journey! With Sasquest by
          your side, the intricate process of orchestrating solo projects
          transforms into a thrilling adventure. It's your ultimate toolkit for
          sculpting the blueprint of your ideas into reality. As you wield
          Sasquest's powers to structure and finesse your creations, you’ll
          ascend the ladder of your developer career, one milestone at a time.
        </p>
      </article>
    </div>
  );
};
