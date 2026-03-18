# InfoManager 2.0

A personal contact and knowledge management system built around a **schema-guided, user-extensible** graph model — where relationships are first-class citizens with their own structure and constraints.

## Philosophy

> *Relationships matter as much as things — and relationship types need schemas.*

InfoManager 2.0 evolves the original premise (everything is an object, relationships are first-class, users can extend the model) by adding type constraints, validation, and cleaner semantics to prevent semantic drift.

---

## Core Model

The system has three layers:

### 1. Object Types

The kinds of things in a personal contact system:

| Type | Fields |
|---|---|
| `Person` | full_name, birthday, primary_email |
| `Organization` | name, industry, website |
| `PhoneNumber` | number, type (mobile/work/home) |
| `EmailAddress` | address, label |
| `Meeting` | date, location, topic |
| `Address` | street, city, country |
| `Note` | body, created_at |

### 2. Relationship Types

Relationship types are schema objects — not just labels. Each defines the rules for a valid connection:

| Type | Direction | Fields |
|---|---|---|
| `WorksFor` | Person → Organization | job_title, start_date, end_date |
| `Knows` | Person ↔ Person | relationship_type (friend/colleague/family), since |
| `HasPhoneNumber` | Person → PhoneNumber | label (personal/work) |
| `MetAt` | Person → Meeting | context, notes |

### 3. Relationship Instances

Actual links between objects, carrying their own data:

```
WorksFor #183
  source: John Doe (Person)
  target: Acme Consulting (Organization)
  job_title: Account Manager
  start_date: 2021-06-01
```

---

## Constraint Model

Each relationship type enforces:

- **Allowed source/target types** — `Person → WorksFor → Organization` is valid; `Organization → WorksFor → Person` is not
- **Directionality** — unidirectional (`→`) or bidirectional (`↔`)
- **Cardinality** — whether multiple instances are permitted
- **Required fields** — which fields must be populated

Invalid examples (blocked by default):
- `PhoneNumber → WorksFor → Organization`
- `Meeting → Knows → Person`

---

## Graph Example

```
Objects:
  John Doe          (Person)
  Jane Smith        (Person)
  Acme Consulting   (Organization)
  +41 79 123 45 67  (PhoneNumber)
  Coffee Meeting    (Meeting)

Valid relationships:
  John Doe  --[WorksFor #183]-->  Acme Consulting
  John Doe  --[Knows #412]-->     Jane Smith
  John Doe  --[HasPhoneNumber]--> +41 79 123 45 67
  John Doe  --[MetAt]-->          Coffee Meeting
```

```
[John Doe:Person] ----[WorksFor #183]----> [Acme Consulting:Organization]
       |
       +----------[Knows #412]-----------> [Jane Smith:Person]
```

---

## User Roles

| Role | Can do |
|---|---|
| **Normal user** | Create objects, create relationship instances using approved types |
| **Power user / Admin** | Define new object types, define new relationship types, set allowed source/target types, configure required fields |

---

## Advanced Features

### Inverse Relationships
Define a relationship once, display it from both sides:
- *John works for Acme* → stored as `WorksFor`
- *Acme employs John* → derived inverse label, no extra storage

### Cardinality Rules
- A person may have many phone numbers
- A meeting may have many participants

### Relationship Inheritance
Group related types under a common parent to share fields:
```
PersonalConnection
  ├── FriendOf      (since, notes)
  ├── ColleagueOf   (since, notes)
  └── FamilyOf      (since, notes)
```

### Validation Modes
- **Hard block** — reject clearly invalid links (e.g. `PhoneNumber → Knows → Person`)
- **Soft warn** — flag unusual but plausible links (e.g. `Organization → Knows → Person` → "company contact?")

---

## Data Model

Minimal relational schema:

```
ObjectType        { id, name }
Object            { id, object_type_id, field_values }
RelationshipType  { id, name, source_object_type_id, target_object_type_id, inverse_label, config }
Relationship      { id, relationship_type_id, source_object_id, target_object_id, field_values }
```

---

## Design Principle

InfoManager 2.0 sits between two extremes:

| Approach | Problem |
|---|---|
| Fully rigid (traditional DB) | Too inflexible for personal knowledge |
| Fully free-form (original InfoManager) | Semantic drift, inconsistency |

**InfoManager 2.0: schema-guided, but user-extensible.**
