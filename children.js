function addChild() {
  const form = document.getElementById('familyForm');
  const addChildBtn = document.getElementById('addChildBtn');

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'ChildrenName[]';
  newInput.placeholder = "Enter Child's Name";
  newInput.required = true;

  const br = document.createElement('br');
  form.insertBefore(br, addChildBtn);
  form.insertBefore(newInput, addChildBtn);

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = 'Remove';

  removeBtn.onclick = () => {
    form.removeChild(newInput);
    form.removeChild(removeBtn);
    form.removeChild(br);
  };

  form.insertBefore(removeBtn, addChildBtn);
}
