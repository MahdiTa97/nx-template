import styles from './topic-button.module.css';

/* eslint-disable-next-line */
export interface TopicButtonProps {}

export function TopicButton(props: TopicButtonProps) {
  return (
    <div className={styles['container']}>
      <div className="bg-red-800 pl-4 rounded-lg shadow flex max-w-md min-w-max hover:shadow-md transition-shadow">
        <div className="p-5 bg-red-800">
          <h2 className="font-bold text-4xl">Hello</h2>
        </div>
      </div>
    </div>
  );
}

export default TopicButton;
