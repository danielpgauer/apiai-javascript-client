export declare class Entity implements IEntity {
    name: string;
    entires: Entity.Entry[];
}
export declare namespace Entity {
    class Entry implements IEntity.IEntry {
        value: string;
        synonyms: string[];
    }
}
export interface IEntity {
    name: string;
    entires: IEntity.IEntry[];
}
export declare namespace IEntity {
    interface IEntry {
        value: string;
        synonyms: string[];
    }
}
