// ── Field Definitions ──────────────────────────────────────────────────────

const fieldDefinitions = [
  // Person
  { id: 'fd1',  parentType: 'object_type', parentTypeId: 'Person',       name: 'full_name',    dataType: 'string', required: true,  displayOrder: 1 },
  { id: 'fd2',  parentType: 'object_type', parentTypeId: 'Person',       name: 'birthday',     dataType: 'date',   required: false, displayOrder: 2 },
  { id: 'fd3',  parentType: 'object_type', parentTypeId: 'Person',       name: 'primary_email',dataType: 'email',  required: false, displayOrder: 3 },
  // Organization
  { id: 'fd4',  parentType: 'object_type', parentTypeId: 'Organization', name: 'name',         dataType: 'string', required: true,  displayOrder: 1 },
  { id: 'fd5',  parentType: 'object_type', parentTypeId: 'Organization', name: 'industry',     dataType: 'string', required: false, displayOrder: 2 },
  { id: 'fd6',  parentType: 'object_type', parentTypeId: 'Organization', name: 'website',      dataType: 'url',    required: false, displayOrder: 3 },
  // PhoneNumber
  { id: 'fd7',  parentType: 'object_type', parentTypeId: 'PhoneNumber',  name: 'number',       dataType: 'phone',  required: true,  displayOrder: 1 },
  { id: 'fd8',  parentType: 'object_type', parentTypeId: 'PhoneNumber',  name: 'type',         dataType: 'string', required: false, displayOrder: 2 },
  // Meeting
  { id: 'fd9',  parentType: 'object_type', parentTypeId: 'Meeting',      name: 'date',         dataType: 'date',   required: true,  displayOrder: 1 },
  { id: 'fd10', parentType: 'object_type', parentTypeId: 'Meeting',      name: 'location',     dataType: 'string', required: false, displayOrder: 2 },
  { id: 'fd11', parentType: 'object_type', parentTypeId: 'Meeting',      name: 'topic',        dataType: 'string', required: false, displayOrder: 3 },
  // Relationship fields
  { id: 'fd12', parentType: 'relationship_type', parentTypeId: 'WorksFor',       name: 'job_title',         dataType: 'string', required: false, displayOrder: 1 },
  { id: 'fd13', parentType: 'relationship_type', parentTypeId: 'WorksFor',       name: 'start_date',        dataType: 'date',   required: false, displayOrder: 2 },
  { id: 'fd14', parentType: 'relationship_type', parentTypeId: 'WorksFor',       name: 'end_date',          dataType: 'date',   required: false, displayOrder: 3 },
  { id: 'fd15', parentType: 'relationship_type', parentTypeId: 'Knows',          name: 'relationship_type', dataType: 'string', required: false, displayOrder: 1 },
  { id: 'fd16', parentType: 'relationship_type', parentTypeId: 'Knows',          name: 'since',             dataType: 'date',   required: false, displayOrder: 2 },
  { id: 'fd17', parentType: 'relationship_type', parentTypeId: 'HasPhoneNumber', name: 'label',             dataType: 'string', required: false, displayOrder: 1 },
  { id: 'fd18', parentType: 'relationship_type', parentTypeId: 'MetAt',          name: 'context',           dataType: 'string', required: false, displayOrder: 1 },
  { id: 'fd19', parentType: 'relationship_type', parentTypeId: 'MetAt',          name: 'notes',             dataType: 'string', required: false, displayOrder: 2 },
];

// ── Object Types ───────────────────────────────────────────────────────────

const objectTypes = [
  { id: 'Person' },
  { id: 'Organization' },
  { id: 'PhoneNumber' },
  { id: 'Meeting' },
];

// ── Relationship Types ─────────────────────────────────────────────────────

const relationshipTypes = [
  { id: 'WorksFor',       sourceType: 'Person', targetType: 'Organization', bidirectional: false, inverseLabel: 'Employs' },
  { id: 'Knows',          sourceType: 'Person', targetType: 'Person',       bidirectional: true,  inverseLabel: null },
  { id: 'HasPhoneNumber', sourceType: 'Person', targetType: 'PhoneNumber',  bidirectional: false, inverseLabel: null },
  { id: 'MetAt',          sourceType: 'Person', targetType: 'Meeting',      bidirectional: false, inverseLabel: null },
];

// ── Objects ────────────────────────────────────────────────────────────────

const objects = [
  { id: 'obj1', objectTypeId: 'Person',       fieldValues: { full_name: 'John Doe',         birthday: '1985-03-14', primary_email: 'john@example.com' } },
  { id: 'obj2', objectTypeId: 'Person',       fieldValues: { full_name: 'Jane Smith',        birthday: '1990-07-22', primary_email: 'jane@example.com' } },
  { id: 'obj3', objectTypeId: 'Person',       fieldValues: { full_name: 'Marcus Teller',     birthday: '1978-11-05', primary_email: 'marcus@acme.com'  } },
  { id: 'obj4', objectTypeId: 'Organization', fieldValues: { name: 'Acme Consulting',        industry: 'Management Consulting', website: 'acme.com' } },
  { id: 'obj5', objectTypeId: 'Organization', fieldValues: { name: 'Northlight Labs',        industry: 'Software',              website: 'northlight.io' } },
  { id: 'obj6', objectTypeId: 'PhoneNumber',  fieldValues: { number: '+41 79 123 45 67',     type: 'mobile' } },
  { id: 'obj7', objectTypeId: 'PhoneNumber',  fieldValues: { number: '+44 20 7946 0958',     type: 'work'   } },
  { id: 'obj8', objectTypeId: 'Meeting',      fieldValues: { date: '2024-11-12',             location: 'Zurich',  topic: 'Q4 strategy review' } },
  { id: 'obj9', objectTypeId: 'Meeting',      fieldValues: { date: '2025-01-30',             location: 'Remote',  topic: 'Product roadmap kickoff' } },
];

// ── Relationships ──────────────────────────────────────────────────────────

const relationships = [
  { id: 'rel1', relationshipTypeId: 'WorksFor',       sourceId: 'obj1', targetId: 'obj4', fieldValues: { job_title: 'Account Manager',   start_date: '2021-06-01' } },
  { id: 'rel2', relationshipTypeId: 'WorksFor',       sourceId: 'obj2', targetId: 'obj5', fieldValues: { job_title: 'Product Designer',   start_date: '2022-03-15' } },
  { id: 'rel3', relationshipTypeId: 'WorksFor',       sourceId: 'obj3', targetId: 'obj4', fieldValues: { job_title: 'Senior Consultant',  start_date: '2019-09-01' } },
  { id: 'rel4', relationshipTypeId: 'Knows',          sourceId: 'obj1', targetId: 'obj2', fieldValues: { relationship_type: 'colleague', since: '2019-01-01' } },
  { id: 'rel5', relationshipTypeId: 'Knows',          sourceId: 'obj1', targetId: 'obj3', fieldValues: { relationship_type: 'friend',    since: '2015-06-01' } },
  { id: 'rel6', relationshipTypeId: 'HasPhoneNumber', sourceId: 'obj1', targetId: 'obj6', fieldValues: { label: 'personal' } },
  { id: 'rel7', relationshipTypeId: 'HasPhoneNumber', sourceId: 'obj3', targetId: 'obj7', fieldValues: { label: 'work'     } },
  { id: 'rel8', relationshipTypeId: 'MetAt',          sourceId: 'obj1', targetId: 'obj8', fieldValues: { context: 'First intro with client', notes: 'Seemed interested in proposal' } },
  { id: 'rel9', relationshipTypeId: 'MetAt',          sourceId: 'obj2', targetId: 'obj9', fieldValues: { context: 'Internal planning session', notes: '' } },
];

// ── Helpers ────────────────────────────────────────────────────────────────

function getObjectLabel(obj) {
  const fv = obj.fieldValues;
  return fv.full_name || fv.name || fv.number || fv.topic || obj.id;
}

function getFieldDefs(parentType, parentTypeId) {
  return fieldDefinitions
    .filter(f => f.parentType === parentType && f.parentTypeId === parentTypeId)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

function getRelationshipsFor(objectId) {
  const results = [];
  for (const rel of relationships) {
    const rt = relationshipTypes.find(r => r.id === rel.relationshipTypeId);
    if (!rt) continue;
    if (rel.sourceId === objectId) {
      results.push({ rel, rt, direction: 'outgoing', peerId: rel.targetId });
    } else if (rel.targetId === objectId && rt.bidirectional) {
      results.push({ rel, rt, direction: 'incoming', peerId: rel.sourceId });
    } else if (rel.targetId === objectId && !rt.bidirectional) {
      // show inverse (e.g. Employs) on the target side too, read-only
      results.push({ rel, rt, direction: 'inverse', peerId: rel.sourceId });
    }
  }
  return results;
}

// ── State ──────────────────────────────────────────────────────────────────

let activeFilter = 'all';
let activeObjectId = null;

// ── Render ─────────────────────────────────────────────────────────────────

function renderFilters() {
  const container = document.getElementById('type-filters');
  const types = ['all', ...objectTypes.map(t => t.id)];
  container.innerHTML = types.map(t => `
    <button class="type-filter ${t === activeFilter ? 'active' : ''}" data-type="${t}">
      ${t === 'all' ? 'All' : t}
    </button>
  `).join('');
  container.querySelectorAll('.type-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.type;
      renderFilters();
      renderList();
    });
  });
}

function renderList() {
  const container = document.getElementById('object-list');
  const filtered = activeFilter === 'all'
    ? objects
    : objects.filter(o => o.objectTypeId === activeFilter);

  container.innerHTML = filtered.map(obj => `
    <div class="object-item ${obj.id === activeObjectId ? 'active' : ''}" data-id="${obj.id}">
      <span class="badge badge-${obj.objectTypeId}">${obj.objectTypeId}</span>
      <span class="object-item-name">${getObjectLabel(obj)}</span>
    </div>
  `).join('');

  container.querySelectorAll('.object-item').forEach(el => {
    el.addEventListener('click', () => {
      activeObjectId = el.dataset.id;
      renderList();
      renderDetail();
    });
  });
}

function renderDetail() {
  const container = document.getElementById('detail-view');

  if (!activeObjectId) {
    container.innerHTML = '<p class="empty-state">Select an object to view details.</p>';
    return;
  }

  const obj = objects.find(o => o.id === activeObjectId);
  if (!obj) return;

  const fieldDefs = getFieldDefs('object_type', obj.objectTypeId);
  const rels = getRelationshipsFor(activeObjectId);

  const fieldsHtml = fieldDefs.map(fd => {
    const val = obj.fieldValues[fd.name] || '—';
    return `
      <div class="field-row">
        <div class="field-key">${fd.name.replace(/_/g, ' ')}</div>
        <div class="field-value">${val}</div>
      </div>`;
  }).join('');

  const relCardsHtml = rels.map(({ rel, rt, direction, peerId }) => {
    const peer = objects.find(o => o.id === peerId);
    if (!peer) return '';
    const peerLabel = getObjectLabel(peer);

    const relFieldDefs = getFieldDefs('relationship_type', rt.id);
    const chipsHtml = relFieldDefs
      .filter(fd => rel.fieldValues[fd.name])
      .map(fd => `<div class="rel-field-chip">${fd.name.replace(/_/g, ' ')}: <span>${rel.fieldValues[fd.name]}</span></div>`)
      .join('');

    let typeLabel = rt.id;
    let arrow = '→';
    if (direction === 'incoming' && rt.bidirectional) arrow = '↔';
    if (direction === 'inverse' && rt.inverseLabel) { typeLabel = rt.inverseLabel; arrow = '←'; }

    return `
      <div class="rel-card" data-peer="${peerId}">
        <div class="rel-card-top">
          <span class="rel-type-label">${typeLabel}</span>
          <span class="rel-direction">${arrow}</span>
          <span class="badge badge-${peer.objectTypeId}">${peer.objectTypeId}</span>
        </div>
        <div class="rel-card-name">${peerLabel}</div>
        ${chipsHtml ? `<div class="rel-card-fields">${chipsHtml}</div>` : ''}
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="detail-header">
      <span class="badge badge-${obj.objectTypeId}">${obj.objectTypeId}</span>
      <h2>${getObjectLabel(obj)}</h2>
    </div>

    <div class="section-label">Fields</div>
    <div class="fields-grid">${fieldsHtml}</div>

    ${rels.length ? `
      <div class="section-label">Relationships</div>
      <div class="rel-cards">${relCardsHtml}</div>
    ` : ''}
  `;

  container.querySelectorAll('.rel-card').forEach(card => {
    card.addEventListener('click', () => {
      activeObjectId = card.dataset.peer;
      // if peer type filtered out, reset filter
      const peer = objects.find(o => o.id === activeObjectId);
      if (peer && activeFilter !== 'all' && peer.objectTypeId !== activeFilter) {
        activeFilter = 'all';
        renderFilters();
      }
      renderList();
      renderDetail();
    });
  });
}

// ── Init ───────────────────────────────────────────────────────────────────

renderFilters();
renderList();
renderDetail();
