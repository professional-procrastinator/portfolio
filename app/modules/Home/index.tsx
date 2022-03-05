import PageStyles from '../../styles/shared/page.module.scss';

import TypeWriter from '../../components/TypeWriter';
export default function Home() {
  const words = ['a developer', 'a designer', 'a math enthusiast.'];

  return (
    <>
      <div className={PageStyles.main}>
        <div className={PageStyles.main__content}>
          <div className={PageStyles.main__content__heading}>
            <TypeWriter prefix="I am" words={words} />
          </div>
        </div>
      </div>
    </>
  );
}
