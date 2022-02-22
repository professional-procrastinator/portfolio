import TypeWriter from '../../components/TypeWriter';
import pageStyles from '../../styles/pages/index.module.scss';

export default function Landing() {
  const words = ['a developer', 'a designer', 'a math enthusiast.'];

  return (
    <>
      <div className={pageStyles.main}>
        <div className={pageStyles.main__content}>
          <div className={pageStyles.main__content__heading}>
            <TypeWriter prefix="I am" words={words} />
          </div>
        </div>
      </div>
    </>
  );
}
