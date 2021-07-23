import React from 'react';
import { ToolbarSection, ToolbarItem } from '../../editor';


export const FormCheckboxSettings = () => {
    return (
        <React.Fragment>
            <ToolbarSection
                title="Field Name"
                props={['fieldName']}
            >
                <ToolbarItem propKey="fieldName" type="text" label="Field Name" />
            </ToolbarSection>
            <ToolbarSection
                title="Label"
                props={['label']}
            >
                <ToolbarItem propKey="label" type="text" label="Label" />
            </ToolbarSection>
        </React.Fragment>
    );
};
