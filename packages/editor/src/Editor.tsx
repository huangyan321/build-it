import Framework from './layout/Framework';

export default function Editor() {
  return (
    <Framework
      header={<div>Header</div>}
      sidebar={<div>Sidebar</div>}
      propsPanel={<div>Props Panel</div>}
    >
      <h1>Workspace</h1>
    </Framework>
  );
}
